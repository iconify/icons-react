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
		"content": `<style>.nf4b58b_e {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm11.263-4.543Q17.5 13.413 17.5 12t-1.621-2.457Q14.258 8.5 12 8.5T8.121 9.543T6.5 12t1.621 2.457T12 15.5t3.879-1.043");
}
</style><path class="nf4b58b_e"/>`,
		"fallback": "material-symbols-light:vignette-rounded",
	});
}

export default Component;
