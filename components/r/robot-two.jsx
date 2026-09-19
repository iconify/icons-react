import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vyhagdbsz.css';
import '../../css/d/d6rjz8b6d.css';
import '../../css/n/nmd1vcbvh.css';
import '../../css/t/tewkg6wrh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq3aKMctS"><g class="rohhhzb0l"><path class="vyhagdbsz"/><path class="d6rjz8b6d"/><circle class="nmd1vcbvh"/><path class="tewkg6wrh"/></g></mask></defs><path mask="url(#SVGq3aKMctS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:robot-two",
	});
}

export default Component;
