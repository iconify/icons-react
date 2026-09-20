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
		"content": `<style>.i8smjpwjq {
  fill: currentColor;
  d: path("m19.5 21.5l-1.4-1.4l1.1-1.1h-7.4q-.3.9-1.075 1.45T9 21t-1.712-.55T6.2 19H5q-1.25 0-2.125-.875T2 16v-6h6V7H2V5h13q.825 0 1.413.588T17 7v10h2.15l-1.05-1.05l1.4-1.45L23 18zM10 10h5V7h-5zm-.288 8.713Q10 18.425 10 18t-.288-.712T9 17t-.712.288T8 18t.288.713T9 19t.713-.288");
}
</style><path class="i8smjpwjq"/>`,
		"fallback": "material-symbols:rv-hookup",
	});
}

export default Component;
