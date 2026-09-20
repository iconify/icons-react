import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.av2tz1brz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.18 16.153a12.26 12.26 0 0 0-9.537-4.605c-6.8 0-12.314 5.574-12.314 12.45s5.512 12.453 12.314 12.454c5.552 0 10.248-3.715 11.784-8.823");
}

.c9nbgfqap {
  fill: currentColor;
  d: path("M36.99 22.322a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0");
}

.xx2ah84-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.197 16.142c5.12-1.097 8.507-1.112 9.18-.042c.574.911-.872 2.53-4.026 4.509m-6.095 3.245a98 98 0 0 1-7.068 2.945c-10.7 3.99-20.352 5.67-21.56 3.75c-.774-1.23 1.97-3.684 7.503-6.517");
}
</style><path class="av2tz1brz"/><path class="xx2ah84-s"/><path class="c9nbgfqap"/>`,
		"fallback": "arcticons:orbit-compose",
	});
}

export default Component;
