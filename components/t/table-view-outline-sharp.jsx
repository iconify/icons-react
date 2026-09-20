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
		"content": `<style>.uk873ibdp {
  fill: currentColor;
  d: path("M6.385 21V6.385H21V21zm1-1h5.807v-3.904H7.385zm6.807 0H20v-3.904h-5.808zM3 17.23V3h14.23v1H4v13.23zm4.385-2.134h5.807v-3.923H7.385zm6.807 0H20v-3.923h-5.808zm-6.807-4.923H20V7.385H7.385z");
}
</style><path class="uk873ibdp"/>`,
		"fallback": "material-symbols-light:table-view-outline-sharp",
	});
}

export default Component;
