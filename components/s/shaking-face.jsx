import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp597vb1l.css';
import '../../css/x/x5bkmobtu.css';
import '../../css/n/n3fug7ags.css';
import '../../css/w/wq6fa8bzw.css';
import '../../css/j/jo1t8bcmc.css';
import '../../css/i/i4485ab4f.css';
import '../../css/l/l-brvabpd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gp597vb1l"/><ellipse class="x5bkmobtu"/><circle class="n3fug7ags"/><path class="wq6fa8bzw"/><ellipse transform="rotate(-31.607 26.484 36.052)" class="jo1t8bcmc"/><ellipse transform="rotate(-39.583 37.77 27.323)" class="i4485ab4f"/><path class="l-brvabpd"/>`,
		"fallback": "openmoji:shaking-face",
	});
}

export default Component;
