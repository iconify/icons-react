import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_swcb_o.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/m/mez_4wb6c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMGRJObUH"><g class="v1_swcb_o"><circle class="kb9zbkb1z"/><circle class="mez_4wb6c"/></g></mask></defs><path mask="url(#SVGMGRJObUH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:radio-two",
	});
}

export default Component;
