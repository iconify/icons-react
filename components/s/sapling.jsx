import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1d7dbbiv.css';
import '../../css/q/qu0oflhiv.css';
import '../../css/u/u5f26dd-a.css';
import '../../css/m/m_qdoccqv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI8Q5fshJ"><g class="ft5dv1b6b"><path class="m1d7dbbiv"/><path class="qu0oflhiv"/><path class="u5f26dd-a"/><path class="m_qdoccqv"/></g></mask></defs><path mask="url(#SVGI8Q5fshJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sapling",
	});
}

export default Component;
