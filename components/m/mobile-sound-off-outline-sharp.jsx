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
		"content": `<style>.hmycerb-i {
  fill: currentColor;
  d: path("m16.816 13.414l-.781-.776q.05-.16.075-.319q.025-.16.025-.319q0-.516-.25-.965t-.645-.781l.72-.72q.536.48.855 1.111q.32.632.32 1.355q0 .358-.08.72t-.24.693m2.148 2.123l-.732-.732q.384-.637.577-1.337T19 12q0-1.106-.416-2.116q-.415-1.009-1.19-1.784l.708-.708q.917.913 1.408 2.108T20 12q0 .975-.265 1.865q-.266.889-.771 1.671m1.882 6.668L1.392 2.75l.708-.708l19.454 19.454zM6 2h12v3.308h-1V3H6zm6.588 4.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M6 22V5.942l1 1V21h10v-4.058l1 1V22zm6.692-12.234");
}
</style><path class="hmycerb-i"/>`,
		"fallback": "material-symbols-light:mobile-sound-off-outline-sharp",
	});
}

export default Component;
