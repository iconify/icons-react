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
		"content": `<style>.q6u1n-bxv {
  fill: currentColor;
  d: path("M11.996 4q1.896 0 3.854.606t3.516 1.706q.342.249.513.603q.171.353.171.727q0 .219-.068.448t-.205.447l-6.429 9.636q-.242.364-.606.545t-.744.182t-.743-.177q-.36-.177-.603-.55L4.223 8.537q-.144-.223-.206-.445q-.061-.222-.061-.444q0-.369.171-.717q.171-.349.514-.595q1.557-1.094 3.507-1.715T11.996 4M9.553 9.132q.293-.291.293-.707t-.29-.709t-.707-.293t-.71.291t-.293.707t.291.709t.707.293t.709-.291m3.154 5.077q.293-.291.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293t.709-.291");
}
</style><path class="q6u1n-bxv"/>`,
		"fallback": "material-symbols-light:local-pizza-rounded",
	});
}

export default Component;
