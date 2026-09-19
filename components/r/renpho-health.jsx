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
		"content": `<style>.ov0so1jyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 17.5a3.25 3.25 0 0 0 0 6.5h11.653L11.952 37.95a3.25 3.25 0 0 0 0 4.598a3.25 3.25 0 0 0 4.597 0l13.952-13.951v11.652a3.25 3.25 0 0 0 6.5 0v-19.5a3.2 3.2 0 0 0-.115-.833c-.077-.286-.179-.532-.33-.795s-.317-.478-.507-.67a3.25 3.25 0 0 0-2.298-.952zm0-13a3.25 3.25 0 0 0 0 6.5h19.5a3.25 3.25 0 0 0 0-6.5z");
}
</style><path class="ov0so1jyh"/>`,
		"fallback": "arcticons:renpho-health",
	});
}

export default Component;
