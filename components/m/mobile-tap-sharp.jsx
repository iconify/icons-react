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
		"content": `<style>.pw21i0hel {
  fill: currentColor;
  d: path("M2 22V10h12v12zM2 8q0-2.5 1.75-4.25T8 2v2Q6.325 4 5.162 5.175T4 8zm4 0q0-.825.575-1.412T8 6v2zm2 7q.425 0 .713-.288T9 14t-.288-.712T8 13t-.712.288T7 14t.288.713T8 15m8-1V8h-6V2h12v12zm0 8v-2q1.65 0 2.825-1.162T20 16h2q0 2.5-1.75 4.25T16 22m0-4v-2h2q0 .85-.587 1.425T16 18");
}
</style><path class="pw21i0hel"/>`,
		"fallback": "material-symbols:mobile-tap-sharp",
	});
}

export default Component;
