import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5-p-4-vc.css';
import '../../css/k/ku8eyo-db.css';
import '../../css/x/xl_woxbbd.css';
import '../../css/u/ujnu3os2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGJd2vOdGG" x1="256" x2="256" y1="13.435" y2="498.565" gradientUnits="userSpaceOnUse"><stop offset="0" class="b5-p-4-vc"/><stop offset="1" class="ku8eyo-db"/></linearGradient><path fill="url(#SVGJd2vOdGG)" class="xl_woxbbd"/><path class="ujnu3os2s"/>`,
		"fallback": "selfhst:microsoft-outlook-2013",
	});
}

export default Component;
