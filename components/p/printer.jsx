import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz-gk8vud.css';
import '../../css/g/gxvwbbc1d.css';
import '../../css/o/o-t0wbchh.css';
import '../../css/s/s1e3y0bgu.css';
import '../../css/f/fx1l3bb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz-gk8vud wm-k"/><path class="gxvwbbc1d wm-k"/><path class="o-t0wbchh wm-a"/><path class="s1e3y0bgu wm-k"/><path class="fx1l3bb8p wm-a"/>`,
		"fallback": "withicons-bauhaus:printer",
	});
}

export default Component;
