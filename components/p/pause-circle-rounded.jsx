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
		"content": `<style>.qptw55blp {
  fill: currentColor;
  d: path("M10.713 15.713Q11 15.425 11 15V9q0-.425-.288-.712T10 8t-.712.288T9 9v6q0 .425.288.713T10 16t.713-.288m4 0Q15 15.426 15 15V9q0-.425-.288-.712T14 8t-.712.288T13 9v6q0 .425.288.713T14 16t.713-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="qptw55blp"/>`,
		"fallback": "material-symbols:pause-circle-rounded",
	});
}

export default Component;
