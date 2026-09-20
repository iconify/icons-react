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
		"content": `<style>.weppshb-t {
  fill: currentColor;
  d: path("M9.077 15.385h5.077v-4.231h-1.27v-.852q0-.361.244-.601q.243-.24.603-.24q.367 0 .645.244q.278.243.278.603v.846h.769v-.842q0-.695-.497-1.157t-1.195-.463q-.666 0-1.141.475t-.475 1.14v.847H9.077zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="weppshb-t"/>`,
		"fallback": "material-symbols-light:mobile-unlock-sharp",
	});
}

export default Component;
