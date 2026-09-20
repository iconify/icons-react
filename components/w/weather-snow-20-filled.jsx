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
		"content": `<style>.ded7w6qve {
  fill: currentColor;
  d: path("M8.5 15a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M7 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763S15.714 13 14.128 13H5.872C4.286 13 3 11.763 3 10.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 5.561 7.535 4 10 4");
}
</style><path class="ded7w6qve"/>`,
		"fallback": "fluent:weather-snow-20-filled",
	});
}

export default Component;
