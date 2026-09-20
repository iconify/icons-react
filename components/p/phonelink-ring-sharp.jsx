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
		"content": `<style>.c_8yrsu6q {
  fill: currentColor;
  d: path("m17.696 14.466l-.719-.72q.396-.333.645-.782q.25-.449.25-.964t-.25-.964t-.645-.782l.72-.72q.536.48.855 1.111t.32 1.355t-.32 1.355t-.856 1.11m2.142 2.143l-.707-.708q.775-.775 1.19-1.784q.416-1.01.416-2.116t-.416-2.116t-1.19-1.784l.708-.708q.92.916 1.409 2.108t.489 2.5t-.489 2.5t-1.41 2.108M6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22z");
}
</style><path class="c_8yrsu6q"/>`,
		"fallback": "material-symbols-light:phonelink-ring-sharp",
	});
}

export default Component;
