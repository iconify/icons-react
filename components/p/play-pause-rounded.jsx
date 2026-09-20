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
		"content": `<style>.l69uplbax {
  fill: currentColor;
  d: path("M6.575 15.1q-.5.35-1.037.063T5 14.275v-4.55q0-.6.538-.887t1.037.062l3.25 2.275q.425.3.425.825t-.425.825zm6.713.613Q13 15.425 13 15V9q0-.425.288-.712T14 8t.713.288T15 9v6q0 .425-.288.713T14 16t-.712-.288m4 0Q17 15.426 17 15V9q0-.425.288-.712T18 8t.713.288T19 9v6q0 .425-.288.713T18 16t-.712-.288");
}
</style><path class="l69uplbax"/>`,
		"fallback": "material-symbols:play-pause-rounded",
	});
}

export default Component;
