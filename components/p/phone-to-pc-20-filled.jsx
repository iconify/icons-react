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
		"content": `<style>.dmdiqacbp {
  fill: currentColor;
  d: path("M4 3.5A1.5 1.5 0 0 1 5.5 2h7A1.5 1.5 0 0 1 14 3.5v5.522A5.5 5.5 0 0 0 9.022 14H7.5a.5.5 0 0 0 0 1h1.522a5.5 5.5 0 0 0 1.235 3H5.5A1.5 1.5 0 0 1 4 16.5zM14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m2.353 4.854l.003-.003a.5.5 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708z");
}
</style><path class="dmdiqacbp"/>`,
		"fallback": "fluent:phone-to-pc-20-filled",
	});
}

export default Component;
