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
		"content": `<style>.xacjxxb8f {
  fill: currentColor;
  d: path("M1.77 18V6h12v12zm1-2.573q1.1-.708 2.35-1.106t2.65-.398t2.65.398t2.35 1.106V7h-10zm3.27-3.194q-.713-.71-.713-1.729t.71-1.733q.709-.713 1.728-.713t1.733.709t.714 1.729t-.71 1.733q-.709.713-1.729.713t-1.732-.709M17 18V6h1v12zm4.23 0V6h1v12z");
}
</style><path class="xacjxxb8f"/>`,
		"fallback": "material-symbols-light:recent-actors-sharp",
	});
}

export default Component;
