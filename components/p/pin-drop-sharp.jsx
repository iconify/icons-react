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
		"content": `<style>.oamq1p_dl {
  fill: currentColor;
  d: path("M12 19q-3.525-2.6-5.262-5.05T5 9.15q0-3.125 1.95-5.137T12 2t5.05 2.013T19 9.15q0 2.35-1.737 4.8T12 19m0-8q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M5 22v-2h14v2z");
}
</style><path class="oamq1p_dl"/>`,
		"fallback": "material-symbols:pin-drop-sharp",
	});
}

export default Component;
