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
		"content": `<style>.bocw3lbzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 7.748H27.348v6.96h3.282v11.745L21.29 9.756a3.92 3.92 0 0 0-3.423-2.008H5.5v6.96h3.294v18.583H5.5v6.96h15.152v-6.96H17.37V21.547l9.34 16.697a3.92 3.92 0 0 0 3.423 2.008h9.073V14.709H42.5z");
}
</style><path class="bocw3lbzv"/>`,
		"fallback": "arcticons:nieuwsblad",
	});
}

export default Component;
