import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cayrkvbzs.css';
import '../../css/g/gglns0bzm.css';
import '../../css/y/yuncnkbph.css';
import '../../css/v/vo71evf5d.css';
import '../../css/s/s6tk9vb2f.css';
import '../../css/e/evluucc1b.css';
import '../../css/i/iv6o18bfl.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cayrkvbzs"/><path class="gglns0bzm"/><circle class="yuncnkbph"/><path class="vo71evf5d"/><path class="s6tk9vb2f"/><path class="evluucc1b"/><circle class="iv6o18bfl"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:om",
	});
}

export default Component;
