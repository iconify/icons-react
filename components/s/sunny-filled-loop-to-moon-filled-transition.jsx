import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk-d2l.css';
import '../../css/m/myr51h.css';
import '../../css/i/iw1iew.css';
import '../../css/n/n37p8h.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/a/a9560j.css';
import '../../css/g/g2fr8g.css';
import '../../css/u/uoo8tm.css';
import '../../css/d/d-jssiii.css';
import '../../css/f/fade-to-0.css';
import '../../css/d/d-4w6zvc.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZovyTcmE"><path class="sk-d2l"/><path class="myr51h"/></mask></defs><path class="iw1iew n37p8h"/><path mask="url(#SVGZovyTcmE)" class="lsejuv ydovum"/><path class="a9560j iw1iew ydovum"/><path class="g2fr8g ydovum"/><path class="uoo8tm ydovum"/>`,
		"fallback": "line-md:sunny-filled-loop-to-moon-filled-transition",
	});
}

export default Component;
