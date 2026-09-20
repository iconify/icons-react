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
		"content": `<style>.vodmw8ipy {
  fill: currentColor;
  d: path("M9 12q.425 0 .713-.288T10 11V8q0-.425-.288-.712T9 7t-.712.288T8 8v3q0 .425.288.713T9 12m1 6h4v-2q0-.825-.587-1.412T12 14t-1.412.588T10 16zm5-6q.425 0 .713-.288T16 11V8q0-.425-.288-.712T15 7t-.712.288T14 8v3q0 .425.288.713T15 12m-3 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="vodmw8ipy"/>`,
		"fallback": "material-symbols:outlet",
	});
}

export default Component;
