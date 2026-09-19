import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxfaanbuh.css';
import '../../css/b/bpyz7rbbp.css';
import '../../css/b/by5oqtcxc.css';
import '../../css/f/fr29d1bmz.css';
import '../../css/k/k-b4jw9sw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSTLyecCe"><g class="ft5dv1b6b"><path class="hxfaanbuh"/><circle class="bpyz7rbbp"/><circle class="by5oqtcxc"/><circle class="fr29d1bmz"/><path class="k-b4jw9sw"/></g></mask></defs><path mask="url(#SVGSTLyecCe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:watermelon-one",
	});
}

export default Component;
