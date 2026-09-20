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
		"content": `<style>.oxix7to-m {
  fill: var(--svg-color--ff3d00, #ff3d00);
  fill-rule: evenodd;
  d: path("M3 3.001v7.156l2.536 2.557V5.56l7.07.023l-2.535-2.558zm12.862 5.724v6.46l-2.536-2.557v-6.46zM8.79 15.858h6.404l-2.535-2.559H6.256zm10.675 2.931v-6.428L16.93 9.804v7.155l-7.07-.024l2.535 2.559l6.393.021l1.349 1.36L21 21l-.164-.83z");
}
</style><path clip-rule="evenodd" class="oxix7to-m"/>`,
		"fallback": "token-branded:plume",
	});
}

export default Component;
