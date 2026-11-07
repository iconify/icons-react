import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtlaqnd5k.css';
import '../../css/p/pj4d7-beq.css';
import '../../css/v/vdr9l434z.css';
import '../../css/a/a9o2u2byj.css';
import '../../css/u/u6oc6ztij.css';
import '../../css/u/upmmfltsf.css';
import '../../css/r/rw8vmfixi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtlaqnd5k"/><path class="pj4d7-beq"/><path class="vdr9l434z"/><path class="a9o2u2byj"/><path class="u6oc6ztij"/><path class="upmmfltsf"/><path clip-rule="evenodd" class="rw8vmfixi"/>`,
		"fallback": "solar:subtitles-outline",
	});
}

export default Component;
