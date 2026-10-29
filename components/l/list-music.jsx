import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q9zcwsr4m.css';
import '../../css/m/md64bd22e.css';
import '../../css/z/z33cxduml.css';
import '../../css/p/pbsfmfbyu.css';
import '../../css/f/faa0q1pay.css';
import '../../css/d/d-iukhzke.css';
import '../../css/h/ho1yev95w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q9zcwsr4m wm-shadow"/><path class="md64bd22e"/><path class="z33cxduml"/><path class="pbsfmfbyu"/><path class="faa0q1pay"/><path class="d-iukhzke"/><path class="ho1yev95w wm-deco"/></g>`,
		"fallback": "withicons-sticker:list-music",
	});
}

export default Component;
