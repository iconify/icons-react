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
		"content": `<style>.xw57f5btw {
  fill: currentColor;
  d: path("M12.707 7.293L12 6.586l3.293-3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414L17.414 12Zm-9.414 8L10.586 8L16 13.414l-7.293 7.293A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4c0-.265.105-.52.293-.707");
}
</style><path class="xw57f5btw"/>`,
		"fallback": "coolicons:pencil-fill-sharp",
	});
}

export default Component;
