import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh-ip8bvp.css';
import '../../css/e/ez-70bw8t.css';
import '../../css/a/a52dqub3d.css';
import '../../css/c/cwgmjr7gi.css';
import '../../css/p/pmzzlgpxx.css';
import '../../css/u/u3mgmxbsm.css';
import '../../css/d/df84wxw8a.css';
import '../../css/h/h7zgbjhwh.css';
import '../../css/c/c35k182lf.css';
import '../../css/q/qeggabjoo.css';
import '../../css/h/hbamhibsu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh-ip8bvp"/><circle class="ez-70bw8t"/><path class="a52dqub3d"/><path class="cwgmjr7gi"/><circle class="pmzzlgpxx"/><path class="u3mgmxbsm"/><circle class="df84wxw8a"/><circle class="h7zgbjhwh"/><path class="c35k182lf"/><path class="qeggabjoo"/><circle class="hbamhibsu"/>`,
		"fallback": "openmoji:washing-machine",
	});
}

export default Component;
