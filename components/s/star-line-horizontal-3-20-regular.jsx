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
		"content": `<style>.zopcbib4e {
  fill: currentColor;
  d: path("M9.104 2.9a1 1 0 0 1 1.794 0L12.922 7H17.5a.5.5 0 1 1 0 1h-4.58a1 1 0 0 1-.896-.557L10 3.342L8.07 7.253a1 1 0 0 1-.753.547L3 8.428l3.124 3.044a1 1 0 0 1 .287.885l-.737 4.3l4.093-2.153a.5.5 0 0 1 .466.886L6.14 17.542a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627zM12 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="zopcbib4e"/>`,
		"fallback": "fluent:star-line-horizontal-3-20-regular",
	});
}

export default Component;
