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
		"content": `<style>.vm7gwhbvu {
  fill: currentColor;
  d: path("M6.308 21v-1H11.5v-3.346q-.43-.16-.696-.522t-.265-.824q0-.595.418-1.019t1.037-.424q.6 0 1.015.424t.414 1.019q0 .468-.256.824t-.667.516V20h5.173v1zM4 15.327V3h16v12.327h-4.198q.012-.27-.022-.513t-.118-.487H19V4H5v10.327h3.294q-.085.244-.115.488t-.02.512zm3.75-3.654h8.5v-1h-8.5zm0-3.77h8.5v-1h-8.5z");
}
</style><path class="vm7gwhbvu"/>`,
		"fallback": "material-symbols-light:table-sign-outline-sharp",
	});
}

export default Component;
