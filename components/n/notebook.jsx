import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gkdbr3bax.css';
import '../../css/p/pmmuggidj.css';
import '../../css/u/ug-wd558g.css';
import '../../css/a/ajwrlub9f.css';
import '../../css/o/o9hb7faeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gkdbr3bax wm-k"/><path class="pmmuggidj wm-shine"/><path class="ug-wd558g wm-shine"/><path class="ajwrlub9f wm-shine"/><path class="o9hb7faeo wm-shine"/></g>`,
		"fallback": "withicons-lunar:notebook",
	});
}

export default Component;
