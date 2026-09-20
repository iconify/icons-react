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
		"content": `<style>.fl5rzeb4j {
  fill: currentColor;
  d: path("M8.5 20.29q-1.642-.711-2.86-1.93T3.71 15.5T3 11.997t.71-3.5T5.64 5.64T8.5 3.71Q10.142 3 12.003 3q1.86 0 3.5.71q1.64.711 2.858 1.93t1.929 2.857q.71 1.64.71 3.5t-.71 3.503q-.711 1.642-1.93 2.86t-2.857 1.93t-3.5.71t-3.503-.71m8.317-3.473q1.99-1.99 1.99-4.817t-1.99-4.817T12 5.193t-4.817 1.99T5.193 12t1.99 4.817T12 18.807t4.817-1.99");
}
</style><path class="fl5rzeb4j"/>`,
		"fallback": "material-symbols-light:trip-origin-outline",
	});
}

export default Component;
