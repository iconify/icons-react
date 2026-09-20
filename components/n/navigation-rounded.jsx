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
		"content": `<style>.jp0ab4sdg {
  fill: currentColor;
  d: path("m12 16.923l-4.95 2.116q-.267.105-.497.043q-.23-.063-.392-.224t-.224-.404t.063-.49l5.267-11.837q.106-.243.311-.364q.205-.12.422-.12t.422.12t.31.364L18 17.964q.125.248.063.49q-.063.242-.224.404t-.392.224t-.497-.044z");
}
</style><path class="jp0ab4sdg"/>`,
		"fallback": "material-symbols-light:navigation-rounded",
	});
}

export default Component;
