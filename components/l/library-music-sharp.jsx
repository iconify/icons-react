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
		"content": `<style>.szm5zwb4z {
  fill: currentColor;
  d: path("M12.191 14.692q.84 0 1.42-.58t.581-1.42v-5.73h2.731V5.423h-3.5v5.808q-.248-.27-.556-.404q-.307-.135-.675-.135q-.84 0-1.42.58t-.58 1.42t.58 1.42t1.42.58M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="szm5zwb4z"/>`,
		"fallback": "material-symbols-light:library-music-sharp",
	});
}

export default Component;
