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
		"content": `<style>.b3vi6vbtf {
  fill: currentColor;
  d: path("M11 2.465V8H2.697ZM13 8V2.465L21.303 8Zm-2 2v5a1 1 0 0 0 2 0v-5h8.414l-7.707 7.707a2.4 2.4 0 0 1-.695.485c.016.124.05.246.105.358c.08.164.202.303.34.42c.427.36 1.002.551 1.536.685C16.29 19.979 17.669 20 19 20a1 1 0 0 1 0 2c-2.399 0-6.463-.087-7.679-2.57a3.2 3.2 0 0 1-.316-1.23a2.4 2.4 0 0 1-.712-.493L2.586 10Z");
}
</style><path class="b3vi6vbtf"/>`,
		"fallback": "coolicons:kite-fill",
	});
}

export default Component;
