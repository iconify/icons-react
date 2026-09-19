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
		"content": `<style>.g9ltv0bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.473 5.357l2.517 2.518l-11.971 11.97L5.5 17.33zm21.411 15.71l2.517 2.517l-14.828 14.828l-2.517-2.517zm-15.74-2.823l2.517 2.517l-8.365 8.365l-2.517-2.517zm7.966 1.303l2.517 2.518L21.932 33.76l-2.517-2.517zm-11.644-6.888l2.518 2.517l-9.32 9.32l-2.517-2.518zM40.66 28.56l1.84 14.08l-13.81-2.11zm-2.74 13.36l3.86-3.87");
}
</style><path class="g9ltv0bvo"/>`,
		"fallback": "arcticons:studyplus",
	});
}

export default Component;
