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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.st2__6xja {
  d: path("m3.553 6.105l8-3.999a1 1 0 0 1 .894 0l8 3.999c.236.119.416.325.501.576l.001.002a1.001 1.001 0 0 1-1.396 1.212l-.889-.444l-.027-.014L12 4.118L5.363 7.437l-.027.014l-.889.443a1 1 0 1 1-.894-1.788ZM9 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0M9 21v-3a3 3 0 1 1 6 0v3a1 1 0 0 1-2 0v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-2 0");
}

.v_kd7kbrm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m5.553 5.106l6-3a1 1 0 0 1 .894 0l6 3A1 1 0 0 1 19 6v4.465l2.555 1.703A1 1 0 0 1 22 13v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 .445-.832L5 10.465V6c0-.379.214-.725.553-.894");
}
</style><g class="cuyn6tgcc"><path class="v_kd7kbrm"/><path class="st2__6xja"/></g>`,
		"fallback": "coolicons:school-bulk-sharp",
	});
}

export default Component;
