import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h0-rh7ewp {
  fill: currentColor;
  d: path("m245.36 77.28l-41.62-20.83C201.38 40.24 183 28 160 28c-24.67 0-44 14.06-44 32a25 25 0 0 0 2.69 11.24l-9.4 4.7C101.56 71 91.35 68 80 68c-24.67 0-44 14.06-44 32a25 25 0 0 0 2.69 11.24l-28.06 14A12 12 0 0 0 4 136v56a12 12 0 0 0 6.63 10.73l64 32a12 12 0 0 0 10.74 0l160-80A12 12 0 0 0 252 144V88a12 12 0 0 0-6.64-10.72M80 154.58L42.83 136l15.81-7.9A58.2 58.2 0 0 0 80 132c24.67 0 44-14.06 44-32a25.4 25.4 0 0 0-.4-4.38l15-7.52A58.2 58.2 0 0 0 160 92c14.72 0 27.53-5 35.47-12.85l17.7 8.85ZM160 52c12.91 0 20 6 20 8s-7.09 8-20 8s-20-6-20-8s7.09-8 20-8M80 92c12.91 0 20 6 20 8s-7.09 8-20 8s-20-6-20-8s7.09-8 20-8m-52 63.42l40 20v29.16l-40-20Zm64 49.16v-29.16l136-68v29.16Z");
}
</style><path class="h0-rh7ewp"/>`,
		"fallback": "ph:lego-bold",
	});
}

export default Component;
