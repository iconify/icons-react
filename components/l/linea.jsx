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
		"content": `<style>.zx327qhpc {
  d: path("M17.633 21H3.478V5.921h3.238v12.157h10.917zm.001-12.159c1.595 0 2.889-1.307 2.889-2.92S19.229 3 17.633 3c-1.595 0-2.888 1.308-2.888 2.92c0 1.614 1.293 2.921 2.889 2.921");
}
</style><path class="zx327qhpc"/>`,
		"fallback": "token-branded:linea",
	});
}

export default Component;
