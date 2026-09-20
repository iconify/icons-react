import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.izc4t3bkq {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2-2h1v3.5A1.5 1.5 0 0 0 7.5 8h4A1.5 1.5 0 0 0 13 6.5V3h.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 17 6.621V9.6a5.5 5.5 0 0 0-2.5-.6c-1.177 0-2.268.37-3.163 1H6.5A1.5 1.5 0 0 0 5 11.5V17a2 2 0 0 1-2-2zm6 9.5c0-1.33.472-2.55 1.257-3.5H6.5a.5.5 0 0 0-.5.5V17h3.6a5.5 5.5 0 0 1-.6-2.5M12 3H7v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5zm7 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.147.354l.003-.003a.5.5 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708z");
}
</style><path class="izc4t3bkq"/>`,
		"fallback": "fluent:save-arrow-right-20-filled",
	});
}

export default Component;
