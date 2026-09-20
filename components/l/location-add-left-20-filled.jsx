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
		"content": `<style>.vwn1e8b6p {
  fill: currentColor;
  d: path("M14.95 13.955a7.005 7.005 0 0 0 0-9.904a7 7 0 0 0-9.9 0a7.005 7.005 0 0 0 0 9.904l1.521 1.499l2.043 1.985l.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37zM9.854 6.354L8.207 8H13a.5.5 0 0 1 0 1H8.207l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708");
}
</style><path class="vwn1e8b6p"/>`,
		"fallback": "fluent:location-add-left-20-filled",
	});
}

export default Component;
