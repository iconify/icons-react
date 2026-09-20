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
		"content": `<style>.c1h15xb1x {
  fill: currentColor;
  d: path("M9.713 16.713Q10 16.425 10 16t-.288-.712T9 15t-.712.288T8 16t.288.713T9 17t.713-.288m3 0Q13 16.426 13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17t.713-.288m3 0Q16 16.426 16 16t-.288-.712T15 15t-.712.288T14 16t.288.713T15 17t.713-.288M10.95 14l5.625-5.65l-1.4-1.425l-4.25 4.25L8.8 9.05l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="c1h15xb1x"/>`,
		"fallback": "material-symbols:preliminary-sharp",
	});
}

export default Component;
