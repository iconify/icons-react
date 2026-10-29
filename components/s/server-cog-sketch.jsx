import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nrmp6jb4l.css';
import '../../css/o/ogqc83-ym.css';
import '../../css/e/eknhatjjm.css';
import '../../css/g/go4bf3bjm.css';
import '../../css/p/pbt1s1b_f.css';
import '../../css/c/cjwt2qmii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nrmp6jb4l"/><path class="ogqc83-ym wm-k"/><path class="eknhatjjm wm-a"/><path class="go4bf3bjm wm-k"/><path class="pbt1s1b_f wm-a"/><path class="cjwt2qmii wm-s"/></g>`,
		"fallback": "withicons:server-cog-sketch",
	});
}

export default Component;
