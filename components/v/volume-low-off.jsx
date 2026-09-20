import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/w/w1_ilv.css';
import '../../css/n/n_ur3u.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTjdugdJA"><path class="c5xdmn w1_ilv"/><path class="c5xdmn n_ur3u oxx-om"/></mask></defs><path mask="url(#SVGTjdugdJA)" class="botfzx"/><path class="c5xdmn gd_4-q n_ur3u"/>`,
		"fallback": "line-md:volume-low-off",
	});
}

export default Component;
