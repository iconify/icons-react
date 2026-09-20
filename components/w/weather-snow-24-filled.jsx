import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gks_qpbqq {
  fill: currentColor;
  d: path("M9.75 18.152a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-6.75-1a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M12 4c3.169 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.314a3.687 3.687 0 0 1-3.692 3.682H6.693A3.687 3.687 0 0 1 3 12.314A3.687 3.687 0 0 1 6.693 8.63h.08C7.035 6.08 8.831 4 12 4");
}
</style><path class="gks_qpbqq"/>`,
		"fallback": "fluent:weather-snow-24-filled",
	});
}

export default Component;
