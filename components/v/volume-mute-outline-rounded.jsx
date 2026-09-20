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
		"content": `<style>.g3t76g-od {
  fill: currentColor;
  d: path("M11.423 14H8.808q-.343 0-.576-.232T8 13.192v-2.384q0-.343.232-.576T8.808 10h2.615l2.685-2.685q.244-.244.568-.112t.324.472v8.65q0 .34-.324.472t-.568-.112zM9 13h2.85L14 15.15v-6.3L11.85 11H9zm2.5-1");
}
</style><path class="g3t76g-od"/>`,
		"fallback": "material-symbols-light:volume-mute-outline-rounded",
	});
}

export default Component;
