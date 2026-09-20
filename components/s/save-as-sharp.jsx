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
		"content": `<style>.qenpenbrp {
  fill: currentColor;
  d: path("M13.23 22v-2.21l5.96-5.934l2.19 2.204L15.44 22zM6.77 9.77h7.422v-3H6.77zm12.42 7.246l.925-.956l-.924-.944l-.95.95zM10.463 20H4V4h12.577L20 7.423v1.746l-6.134 6.09q.096-.165.134-.321t.039-.361q0-.846-.577-1.423t-1.423-.577t-1.423.577t-.577 1.423t.577 1.423t1.423.577q.178 0 .348-.039t.329-.134l-2.254 2.234z");
}
</style><path class="qenpenbrp"/>`,
		"fallback": "material-symbols-light:save-as-sharp",
	});
}

export default Component;
