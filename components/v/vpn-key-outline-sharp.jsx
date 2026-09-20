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
		"content": `<style>.odr6zewsy {
  fill: currentColor;
  d: path("M7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q1.65 0 3.025.825T12.2 9H23v6h-2v3h-6v-3h-2.8q-.8 1.35-2.175 2.175T7 18m0-2q1.65 0 2.65-1.012T10.85 13H17v3h2v-3h2v-2H10.85q-.2-.975-1.2-1.987T7 8T4.175 9.175T3 12t1.175 2.825T7 16m0-2q.825 0 1.413-.587T9 12t-.587-1.412T7 10t-1.412.588T5 12t.588 1.413T7 14m0-2");
}
</style><path class="odr6zewsy"/>`,
		"fallback": "material-symbols:vpn-key-outline-sharp",
	});
}

export default Component;
