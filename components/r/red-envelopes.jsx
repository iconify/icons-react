import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vm4lbxnji.css';
import '../../css/v/vztlpvtgy.css';
import '../../css/s/sh5-9pbzi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRZw01bcd"><g class="v3_i3wktz"><path class="vm4lbxnji"/><path class="vztlpvtgy"/><path class="sh5-9pbzi"/></g></mask></defs><path mask="url(#SVGRZw01bcd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:red-envelopes",
	});
}

export default Component;
